/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Nuclear Power Training Unit',
    position: 'Chemistry and Radiological Controls Assistant',
    url: 'https://navalnuclearlab.energy.gov/nptu-charleston/',
    startDate: '2024-07-01',
    summary: 'Leading a team of approximately 30 specialized technicians responsible for the training of over 1000 Sailors and Naval Officers yearly in safe radiological controls and operations. Directly responsible for the radiological management and chemistry of a land-based Naval Reactor.',
    highlights: [
      'Member of the Emergency Response Organization',
      'Chair academic examination boards in support of staff and student training',
    ],
  },
  {
    name: 'Nuclear Power Training Unit',
    position: 'Shift Engineer',
    url: 'https://navalnuclearlab.energy.gov/nptu-charleston/',
    startDate: '2023-08-01',
    endDate: '2024-07-01',
    summary: 'Led a staff of Sailors and Officers to ensure safe day-to-day operations of Moored Training Ship USS San Francisco. Provided practical, academic, and professional training to future Sailors and Officers of the US Nuclear Navy.',
    highlights: [
      'Mentored Submarine Officers to aid them in their professional development and career planning.',
    ],
  },
  {
    name: 'USS Columbia',
    position: 'Communications Officer',
    url: 'https://www.csp.navy.mil/columbia/About/',
    startDate: '2022-03-01',
    endDate: '2023-08-01',
    summary: `Led a team of communication and electronic warfare operators through an independent and demanding deployed environment. 
    Provided critical oversight as a Communication Security Account Manager, responsible for the readiness, employment, and secure 
    operation of submarine communication equipment throughout various deployed environments.`,
    highlights: [
      'Trained and certified a team of Information Technicians and Electronic Warfare specialists on the operation of mission-specific communication and electronic support equipment.',
      'As a mission coordinator and contact manager, led an on-watch team of highly trained Sailors and Officers in the planning and execution of complex missions as directed by the operational commander while deployed to the Indo-Pacific.',
    ],
  },
];

export default work;
