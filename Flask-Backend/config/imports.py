import json
import mariadb
import sys 
import os
import oauthlib
import datetime
import requests
import cachecontrol

from flask_session import Session
from dotenv import load_dotenv
from flask import Flask, request, Blueprint, url_for, redirect, abort,session, flash, get_flashed_messages, abort, jsonify, request
from flask_restful import Resource, Api
from marshmallow import Schema, fields, validate
from flask_cors import CORS, cross_origin
from blinker import signal

from google.oauth2 import id_token
from google.oauth2 import service_account
import google.auth
import google.auth.transport.requests as google_requests