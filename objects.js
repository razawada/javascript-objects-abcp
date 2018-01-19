var playlist = {
  Marina: "Blue"
};

function updatePlaylist(obj, key, value) {
  obj[key] = value;

  return obj;
};

updatePlaylist(playlist, 'Gaga', 'Bad Romance');
