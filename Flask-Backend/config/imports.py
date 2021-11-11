import json
import mariadb
import sys 
import os
import oauthlib
from flask import Flask, request, Blueprint, url_for, redirect, abort,session
from flask_dance.contrib.google import make_google_blueprint, google
from flask_dance.consumer import oauth_authorized
from flask_restful import Resource, Api
from marshmallow import Schema, fields
from flask_cors import CORS
from blinker import signal