import Pouch from 'pouchdb';

var db = new Pouch('test');
if (typeof window != "undefined") {window.PouchDB = Pouch};
