import json
import mariadb
import sys 
from flask import Flask, request, Blueprint, abort
from flask_restful import Resource, Api
from marshmallow import Schema, fields