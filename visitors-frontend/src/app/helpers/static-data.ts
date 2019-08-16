// Add Accolite related static data

export const accoliteLocation = [ "Bangalore", "Hyderabad", "Delhi" ];

export const visitPurposes = [ 'Interview', 'Meeting', 'New Joinee' ];

// If the last status is any one of these status we can add new visit
export const addVisitStatus = [ 'COMPLETED', 'DECLINED', 'CANCELLED' ];

export const idType = [
  'Voter Id',
  'Aadhar Card',
  'PAN Card',
  'Driving License',
  'Passport'
];

// To Add success or error snackbar message
export const accoliteSnackbarMessages = {
  rest: {
    success: {
      'create-visitors': 'Successfully created Visitor details',
      'successfully-approved': 'Successfully approved visitor',
      'successfully-cancelled': 'Scheduled meeting is cancelled',
      'add-visit': 'Added new visit',
      'update-visit-summary': 'Updated visit successfully',
      'notify-email': 'Notification sent successfully'
    },
    error: {
      'create-visitors': 'Failed to create Visitor details',
      'successfully-approved': 'Failed to approve visitor',
      'add-visit': 'Added new visit failed',
      'update-visit-summary': 'Updated visit failed',
      'notify-email': 'Notification failed'

    }
  }
};
