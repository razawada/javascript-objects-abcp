var playlist = {
  Marina: "Blue"
};

function updatePlaylist(obj, key, value) {
  obj[key] = value;

  return obj;
};

function removeFromPlaylist(obj, key) {
  delete obj.key;
  return obj;
};

updatePlaylist(playlist, 'Gaga', 'Bad Romance');

removeFromPlaylist(playlist, "Gaga");