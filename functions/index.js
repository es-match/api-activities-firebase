const functions = require("firebase-functions");
const admin = require("firebase-admin");
const app = require("express")();

const router = require("express")();
admin.initializeApp();

const db = admin.firestore()
    .collection("activities");


app.use("/api/v1", router);


router.get("/activities/:id", (request, response) => {
  db.doc(request.params.id).get()
      .then((ac) => response.status(200).json({
        id: ac.id,
        sportDescription: ac.data().sportDescription == null ?
        "" : ac.data().sportDescription,
        sportName: ac.data().sportName == null ?
        "" : ac.data().sportName,
        createDate: ac.data().createDate == null ?
         [""] : ac.data().createDate.toDate(),
        imageUrl: ac.data().imageUrl == null ?
         "" : ac.data().imageUrl,
      })
          .catch((error) => response.status(400)
              .send(`Cannot get event: ${error}`)));
});

router.get("/activities", (request, response) => {
  db.get()
      .then((activities) => {
        const listActivities = [];

        activities.forEach((ac) => {
          listActivities.push({
            id: ac.id,
            sportDescription: ac.data().sportDescription == null ?
            "" : ac.data().sportDescription,
            sportName: ac.data().sportName == null ?
            "" : ac.data().sportName,
            createDate: ac.data().createDate == null ?
             [""] : ac.data().createDate.toDate(),
            imageUrl: ac.data().imageUrl == null ?
            "" : ac.data().imageUrl,
          });
        });

        response.json(listActivities);
      });
});


exports.dbActivities = functions.https.onRequest(app);
