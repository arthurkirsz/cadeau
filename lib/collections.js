Jewels = new Mongo.Collection('jewels');



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup    
	if (Jewels.findOne({code: 'bracelet'}) == undefined) {
		Jewels.insert({
		  isActive: true,
		  name: "BRACELET À CHARMS PANDORA - ARGENT 925/1000E (Taille 18)",
		  code: "bracelet",
		  url: "http://estore-fr.pandora.net/fr_FR/bracelets/bracelets-charms/bracelet-a-charms-pandora---argent-925%2F1000e/590702HV.html?cgid=1a9e785e-7db6-458c-ab68-a0c9008de111&prefn1=metalGroup&navid=xsellpdppv&start=601&prefv1=Argent%20925%2F1000e",
		  price: "59.00",
		  owner: ""
		});
	}




	if (Jewels.find({}).count() === 0) {
		Jewels.insert({
		  isActive: true,
		  name: "CHARM MURANO TROPICAL",
		  code: "murano-tropical",
		  url: "http://estore-fr.pandora.net/fr_FR/charms/charms/charm-murano-tropical/791610.html",
		  price: "39.00",
		  owner: ""
		});

		Jewels.insert({
		  isActive: true,
		  name: "CHARM EN VERRE DE MURANO À MOTIF ZIGZAG BLANC",
		  code: "murano-zigzag",
		  url: "http://estore-fr.pandora.net/fr_FR/charms/charms/charm-en-verre-de-murano-a-motif-zigzag-blanc/790921.html?cgid=04b3a57d-1a29-49ee-bdb3-a0c9008e25bf&start=23",
		  price: "29.00",
		  owner: ""
		});

		Jewels.insert({
		  isActive: true,
		  name: "CHARM SERPENT SCINTILLANT",
		  code: "snake",
		  url: "http://estore-fr.pandora.net/fr_FR/charms/charms/charm-serpent-scintillant/791539CZ.html?cgid=04b3a57d-1a29-49ee-bdb3-a0c9008e25bf&start=64",
		  price: "49.00",
		  owner: ""
		});

		Jewels.insert({
		  isActive: true,
		  name: "CHARM PENDENTIF LUNE ET ETOILE BLEU NUIT",
		  code: "moon",
		  url: "http://estore-fr.pandora.net/fr_FR/charms/charms-pendentif/charm-pendentif-lune-et-etoile-bleu-nuit/791392NBC.html?cgid=16cadbf0-fa12-450e-b8c6-a0c9008e2a24&navid=xsellpdppv&start=4741",
		  price: "59.00",
		  owner: ""
		});

		Jewels.insert({
		  isActive: true,
		  name: "CLIP BOULES",
		  code: "clip",
		  url: "http://estore-fr.pandora.net/fr_FR/charms/clips/clip-boules/791000.html?cgid=4f10cf0d-cd9f-4518-9d33-a0c9008e2647&navid=xsellpdppv&start=961",
		  price: "39.00",
		  owner: ""
		});

		Jewels.insert({
		  isActive: true,
		  name: "CHAÎNE DE SÉCURITÉ MOTIF FLORAL",
		  code: "chain",
		  url: "http://estore-fr.pandora.net/fr_FR/charms/chaine-de-confort/chaine-de-securite-motif-floral/790385.html?cgid=b1b12ea4-4598-40ca-af9f-a0c9008e3c48&start=3",
		  price: "39.00",
		  owner: ""
		});

		Jewels.insert({
		  isActive: true,
		  name: "CLIP FEUILLES ETINCELANTES",
		  code: "leaf",
		  url: "http://estore-fr.pandora.net/fr_FR/charms/clips/clip-feuilles-etincelantes/791416CZ.html?cgid=4f10cf0d-cd9f-4518-9d33-a0c9008e2647&start=12",
		  price: "49.00",
		  owner: ""
		});

		
		Jewels.insert({
		  isActive: true,
		  name: "BRACELET À CHARMS PANDORA - ARGENT 925/1000E (Taille 18)",
		  code: "bracelet",
		  url: "http://estore-fr.pandora.net/fr_FR/bracelets/bracelets-charms/bracelet-a-charms-pandora---argent-925%2F1000e/590702HV.html?cgid=1a9e785e-7db6-458c-ab68-a0c9008de111&prefn1=metalGroup&navid=xsellpdppv&start=601&prefv1=Argent%20925%2F1000e",
		  price: "59.00",
		  owner: ""
		});

	}
  });
}