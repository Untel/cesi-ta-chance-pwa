const fromFrontToBack = (el) => {
  return {
    candidateId: el._id,
    candidateLastName: el.lastName,
    candidateFirstName: el.firstName,
    candidateGender: el.gender,
    candidateBirthdate: el.birthdate,
    candidateAddress: el.address,
    candidateCity: el.city,
    candidatePostalCode: el.postalCode,
    candidatePhone: el.phone,
    candidateEmail: el.email,
    candidateFormation: el.training,
    candidateDegree: el.degree, 
    candidateLastSchool: el.lastSchool,
    candidateKnownCesi: el.knownCesi,
    hasContactWithOthersSchools: !!el.hasContactWithOthersSchools,
    interests: el.interestedBy.join(','),
    allowContact: el.allowContact,
    // contactDate: new Date(el.contactDate),
    contactPlace: el.contactPlace,
    schoolsContacts: el.schoolsContacts && el.schoolsContacts.length ? el.schoolsContacts.map(el = ({ schoolName: el })) : [],
  };

};

const fromBackToFront = (el) => {
  return {
    _id: el.candidateId,
    lastName: el.candidateLastName,
    firstName: el.candidateFirstName,
    gender: el.candidateGender,
    birthdate: el.candidateBirthdate ? new Date(el.candidateBirthdate).toISOString() : null,
    candidateAddress: el.address,
    candidateCity: el.city,
    candidatePostalCode: el.postalCode,
    candidatePhone: el.phone,
    candidateEmail: el.email,
    candidateFormation: el.training,
    degree: el.candidateDegree,
    candidateLastSchool: el.lastSchool,
    candidateKnownCesi: el.knownCesi,
    hasContactWithOthersSchools: el.hasContactWithOthersSchools,
    allowContact: el.allowContact,
    interestedBy: el.interests ? el.interests.split(',') : '',
    // contactDate: el.contactDate ? new Date(el.contactDate).toISOString() : null,
    contactPlace: el.contactPlace,
    schoolsContacts: el.schoolsContacts && el.schoolsContacts.length ? el.schoolsContacts.map(el = el.schoolName) : [],
    sync: true,
  };
};

export {
  fromFrontToBack,
  fromBackToFront,
};
