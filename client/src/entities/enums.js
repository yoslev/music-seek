const INSTRUMENTS = {
    0: "Bass",
    1: "Drums" ,
    2: "Percussion",
    3: "Guitar",
    4: "Lead Guitar",
    5: "Keyboard",
    6: "Vocals",
    7: "Lead Vocals",
};

function getInstrumentById(id) {
    return INSTRUMENTS[id]
}

const MUSIC_GENRES = {
    1: "Pop",
    2: "Hip hop",
    3: "Rap",
    4: "Rock",
    5: "Rhythm and blues",
    6: "Soul",
    7: "Reggae",
    8: "Country",
    9: "Funk",
    10: "Folk",
    11: "Middle Eastern",
    12: "Jazz",
    13: "Disco",
    14: "Classical",
    15: "Electronic",
    16: "Latin America",
    17: "Blues",
    18: "New-age",
    19: "Vocal"
}

function getGenreById(id) {
    return MUSIC_GENRES[id]
}

const PLAYER_LEVELS = {
    0: "Beginner",
    1: "Advanced Beginner",
    2: "Professional",
}

function getPlayerLevelById(id) {
    return PLAYER_LEVELS[id]
}

const REGIONS = {
    0: "Ako, Nahariya",
    1: "Golan",
    2: "Haifa",
    3: "Hadrera",
    4: "Tiberias",
    5: "Nazareth",
    6: "Afula",
    8: "Jerusalem",
    7: "Netanya",
    9: "Herzliya",
    10: "Raanana",
    11: "Kfar Saba",
    12: "Tel Aviv",
    13: "Ramat-Gan",
    14: "Givaatayim",
    15: "Beney Brak",
    16: "Petach Tikva",
    17: "Holon, Bat Yam",
    18: "Rishon",
    19: "Ashdod, Ashkelon",
    20: "Beer Sheva",
    21: "Negev",
    22: "Arava",
    23: "Eilat",
    24: "Bikaa"
}

function getRegionById(id) {
    return REGIONS[id]
}

const AGE_CLASS = {
    0: "16-17",
    1: "18-21" ,
    2: "22-26",
    3: "27-35",
    4: "36-44",
    5: "45-55",
    6: "56-65",
    7: "66-Older",
}

function getAgeClassById(id) {
    return AGE_CLASS[id]
}

module.exports = {
    getInstrumentById : getInstrumentById,
    getGenreById : getGenreById,
    getPlayerLevelById : getPlayerLevelById,
    getRegionById : getRegionById,
    getAgeClassById : getAgeClassById,
}