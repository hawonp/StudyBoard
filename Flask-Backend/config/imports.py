import json
import mariadb
import sys 
import os
from flask import Flask, request, Blueprint, url_for, redirect, abort
from flask_dance.contrib.google import make_google_blueprint, google
from flask_restful import Resource, Api
from marshmallow import Schema, fields
from flask_cors import CORS
