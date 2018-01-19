var myPlaylist = {
  Marina: "Blue"
};

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = value;

  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
};

updatePlaylist(playlist, 'Gaga', 'Bad Romance');

removeFromPlaylist(playlist, "Gaga");
