# Server Side Project - Hospital API

- Tech Stack used - Node.js and Mongo DB

- An API for the doctors of a Hospital which has been allocated by the
  govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
   - Doctors
   - Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
   - Register the patient in the app (using phone number, if the patient already exists, just
   - return the patient info in the API)
   - After the checkup, create a Report
- Patient Report will have the following fields
   - Created by doctor
   - Status: Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
