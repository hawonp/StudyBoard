import json
import mariadb
import sys
import os
import datetime
import requests

from dotenv import load_dotenv
from flask import Flask, request, Blueprint, url_for, redirect, abort,session, flash, get_flashed_messages, abort, jsonify, request
from flask_restful import Resource, Api
from marshmallow import Schema, fields, validate
from flask_cors import CORS, cross_origin
from blinker import signal
