export const Projects = [
    {
        name: 'ADUNA',
        path: '/aduna',
        description: `This was a personal project in which I developed a System that managed the sale and loading of water to transport trucks.
        The development was based on a point of sale in which the trucks, liters of water and transport destinations were managed.
        The functionality of counting liters of water, opening and closing of the faucet, was implemented with an Arduino microcontroller, to control and calculate the outflow of water.
        This system is operating productively in Puebla and the State of Mexico.`,
        tooltip: 'Managed system to sale and loading of water to transport trucks'
    },  
    {
        name: 'VISITOR SYSTEM',
        path: '/python',
        description: `This System records the information of visitors who come to a specific site. The information is 
        loaded into a form where the user is asked for his identification, scanned and sent to a service that 
        extracts the main data from the credential. After this, the visitor's photograph is captured and access 
        permissions are assigned through Axiom Data so that they can pass through the turnstiles.`,
        tooltip: ''
    },  
    {
        name: 'VEHICLE INSPECTION',
        path: '/python',
        description: `This System is in charge of digitizing the lower part of cars of all kinds at a certain 
        speed and through physical adjustments a camera (PYLON) is placed, 
        which is in charge of taking up to 3000 photographs per second to capture every detail of the car's 
        chassis. and to be able to identify strange elements or unwanted packages.`,
        tooltip: ''
    },
    {
        name: 'APPOINTMETS ONLINE',
        path: '/python',
        description: `The main objective of this System is to schedule an appointment for a guest from your space in 
        the cloud (https://dr.visitor-online.com); Once the appointment is scheduled, the System sends an encrypted 
        QR code to the visitor by email or SMS and the information is recorded in SQL and through a replication 
        process it is sent to the client's local server through a secure link or connection by VPN.`,
        tooltip: ''
    }
];