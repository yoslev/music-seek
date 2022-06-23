const INSTRUMENT = {
    0: "Bass",
    2: "Drums" ,
    3:"Percussion",
    4:"Guitar",
    5:"Lead Guitar",
    6:"Keyboard",
    7:"Vocals",
    8:"Lead Vocals",
};

function geInstrumentById(id) {
    return INSTRUMENT[id]
}

// console.log(geInstrumentById(3))