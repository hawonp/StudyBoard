import json
import mariadb
import sys 
import os
import oauthlib
from flask import Flask, request, Blueprint, url_for, redirect, abort,session, flash, get_flashed_messages
from flask_restful import Resource, Api
from marshmallow import Schema, fields
from flask_cors import CORS, cross_origin
from blinker import signal
from google.oauth2 import id_token
from google.auth.transport import requests