// Add Accolite related static data

export const accoliteLocation = [ "Bangalore", "Hyderabad", "Delhi" ];

export const idType = [
  "Voter Id",
  "Aadhar Card",
  "PAN Card",
  "Driving License",
  "Passport"
];

// To Add success or error snackbar message
export const accoliteSnackbarMessages = {
  rest: {
    success: {
      "create-visitors": "Successfully created Visitor details",
      "successfully-approved": "Successfully approved visitor",
      "successfully-cancelled": "Scheduled meeting is cancelled"
    },
    error: {
      "create-visitors": "Failed to create Visitor details",
      "successfully-approved": "Failed to approve visitor"
    }
  }
};
