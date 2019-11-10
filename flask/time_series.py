import flask
from flask import render_template
from flask_cors import CORS, cross_origin
app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

#--------  Hello Message  -----------#

@app.route('/')
def greetings():
    return """<h2>Please visit /predict to predict using the model 
    for example enter /predict?pclass=1&sex=1&age=18&fare=500&sibsp=0</h2>"""

#-------- MODEL GOES HERE -----------#

import pickle
with open('model.pkl', 'rb') as picklefile:
    model = pickle.load(picklefile)

#-------- ROUTES GO HERE -----------#

import numpy as np
import pandas as pd

@app.route('/data',methods=['GET'])
def getData():
        # # read the data
    df=pd.read_csv('data.csv')
    df.drop(['name','quantity','total'],axis=1,inplace=True)
    # # change the dates into datetime format
    df['date']=pd.to_datetime(df['date'])

    # # sorting and setting the timeline as index
    df.sort_values('date',inplace=True)
    df.set_index('date',inplace=True,drop=True)


    # # fixing the numbers within the dataframe
    df.price=df.price.apply(lambda x: x.replace(',',''))
    

    # # changing data-type into float
    df=df.applymap(lambda x: float(x) if str.isdigit(str(x)) else x)

    # # removing outliers with pct change.
    df_pct=df.price.pct_change()
    df_pct.fillna(np.nanmedian(df_pct),inplace=True)
    mask=(df_pct-np.mean(df_pct))>np.std(df_pct)*3
    df=df[~mask]

    # # We want to resample our data to have the same time interval
    x='D'

    df=df.resample(x).mean()

    # # connect the missing points in our sampled data

    df.interpolate(method='linear',inplace=True)
    
    
    df.index=list(df.index.astype(str))
    return flask.jsonify(df.to_dict())

if __name__ == '__main__':
    '''Connects to the server'''

    HOST = '127.0.0.1'
    PORT = 5000

    app.run(HOST, PORT)
