// console.log('\'Allo \'Allo!');

// import idb from 'idb';

var restaurants;
const DB_TABLE = 'diner-reviews';
const DB_NAME = 'udacity-mws';
const REMOTE_JSON_API = 'http://localhost:1337/restaurants';
const DB_PRIMARY_KEY = 'id';

const dbPromise = idb.open(DB_NAME, 1, upgradeDB => {
  upgradeDB.createObjectStore(DB_TABLE, {keyPath: DB_PRIMARY_KEY});
});

// get remote json data

REMOTE_JSON_API 

function addRestaurantsIdb() {
  // Fetch data from remote server
  // Put data into an array or object
  fetch(REMOTE_JSON_API).then(response => {return response.json(); }).then(restaurants => {
    console.trace('[addRestaurantsIdb Trace]', restaurants);
/*      dbPromise.then(function(db) {
      var transaction = db.transaction(DB_NAME, 'readwrite');
      var objstore = transaction.objectStore(DB_NAME);
      for ( let i = 0; i < restaurants.length; i++) {
        objstore.put(restaurants[i]);
    }
      return transaction.complete;
    });
   })
  .catch (error => {
    console.trace('[addRestaurantsIdb Trace Error]', error);
  */});
}


// get all data

dbPromise.then(db => {
  return db.transaction(DB_TABLE)
    .objectStore(DB_TABLE).getAll();
}).then(allObjs => console.log(allObjs));

// old code from git

/* const myComics = [
  { id: 1, title: "Amazing Fantasy #15", published: "1962"
  }, { id: 2, title: "Detective Comics #27", published: "1939"
  }, { id: 3, title: "Action Comics #1", published:  "1938"
  }, { id: 4, title: "The Incredible Hulk #180", published:  "1974"
  }
];

if (window.indexedDB) {
  var request = indexedDB.open("comicsDB", 1);

  request.onerror = function(e){
    console.log(e);
  }

  request.onupgradeneeded = function(e){
    var db = e.target.result;
    var objectStore = db.createObjectStore("comics", {keyPath: "id"});
    objectStore.createIndex("title", "title", {unique: false});
    objectStore.transaction.oncomplete = function(e) {
      var store = db.transaction(["comics"], "readwrite").objectStore("comics");
      for ( var i = 0 ; i < myComics.length; i++) {
        store.add(myComics[i]);
      }
    }
  }

  request.onsuccess = function(e){
    console.log("success");
  }

}
 */