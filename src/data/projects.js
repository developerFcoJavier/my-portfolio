const base =  process.env.PUBLIC_URL;

export const Projects = [
    {
        name: 'ADUNA',
        path: '',
        description: `This was a personal project in which I developed a System that managed the sale and loading of water to transport trucks.
        The development was based on a point of sale in which the trucks, liters of water and transport destinations were managed.
        The functionality of counting liters of water, opening and closing of the faucet, was implemented with an Arduino microcontroller, to control and calculate the outflow of water.
        This system is operating productively in Puebla and the State of Mexico.`,
        tooltip: 'Managed system to sale and loading of water to transport trucks'
    },  
    {
        name: 'VISITOR SYSTEM',
        path: '',
        description: `This System records the information of visitors who come to a specific site. The information is 
        loaded into a form where the user is asked for his identification, scanned and sent to a service that 
        extracts the main data from the credential. After this, the visitor's photograph is captured and access 
        permissions are assigned through Axiom Data so that they can pass through the turnstiles.`,
        tooltip: ''
    },  
    {
        name: 'VEHICLE INSPECTION',
        path: '',
        description: `This System is in charge of digitizing the lower part of cars of all kinds at a certain 
        speed and through physical adjustments a camera (PYLON) is placed, 
        which is in charge of taking up to 3000 photographs per second to capture every detail of the car's 
        chassis. and to be able to identify strange elements or unwanted packages.`,
        tooltip: '',
        points:[
            {
                img: base +'/uvis/1.png',
                description:`This System is in charge of digitizing the lower part of cars of all kinds at a certain speed and through physical adjustments a camera (PYLON) is placed, which is in charge of taking up to 3000 photographs per second to capture every detail of the car's chassis. and to be able to identify strange elements or unwanted packages.
                `,
            },            
            {
                img: base +'/uvis/2.png',
                description:`The System consists of 3 correctly synchronized subsystems, Interface System, Sensor System and Capture System.
                \nIn order to identify that a car is ready to be scanned, there is a RaspBerry microcontroller which, through its code developed in Ptyhon3, manages to detect any type of sensor connected to its terminals where dry pulses are emitted and received, once it is detected, the microcontroller communicates via sockets to the capture subsystem also called “Stitching” so that the capture of each frame begins. 
                `,
            },            
            {
                img: base +'/uvis/3.png',
                description:`When the event ends, all the information is stored in the Database and so that the result of the event is finally displayed in the graphical interface through sockets and does not depend on user interaction, automating the entire process.
                `,
            },            
            {
                img: base +'/uvis/4.png',
                description:`The UVIS System represented a great challenge of several months of development, management and time to make it work as smoothly as possible.
                This System is focused on the security of sites that demand high access control, such as prisons, banks and/or subdivisions.
                `,
            },
        ],
        prod:'https://uvis.visitor-online.com',
        property:'DR México'
    },
    {
        name: 'APPOINTMETS ONLINE (Prodecon)',
        path: '',
        description: `The largest Project that I have developed in support of my development team is the management of appointments and shifts for the “Procuraduría de la Defensa al Contribuyente”.`,
        tooltip: '',
        points:[
            {
                img: base +'/appointments/1.png',
                description:`This System has multiple modules that in turn communicate with each other in order to keep the information always available for the service.
                `,
            },            
            {
                img: base +'/appointments/2.png',
                description:`The first module is in charge of offering users in general the possibility of registration and a space to store their appointments and schedule new ones.

                When the user (taxpayer) schedules a new appointment, the information is stored and a confirmation is sent to their email with a QR code.
                `,
            },            
            {
                img: base +'/appointments/3.jpg',
                description:`The second module is mainly made up of Hardware, since it is about 2 components, a kiosk (manufactured in the facilities) with the software that allows reading the user's QR code and printing the shift assigned to it. These tools were developed with the net framework to work as a Windows driver and be recognized by the System effectively.

                The software that carries the screen where the turns are shown was also developed with the net framework and is used to display advertisements, the next turns and those that are waiting.
                `,
            },            
            {
                img: base +'/appointments/4.jpg',
                description:`The Third module is in charge of managing the shifts issued by the kiosk, it is a small widget that calls the next shift and communicates with the other modules to inform that the service has already ended. This module also has a manageable interface in which the client side users can insert, modify, delete or consult the catalogs with which the System works in general.
                `,
            },            
            {
                img: '',
                description:`
                The challenge represented by the development of this System was very high, since time was essential and the magnitude of the requirement was difficult to manage.
                As of today, the System is in operation serving more than 2,000 users per day throughout the country.
                 `,
            },
        ],
        prod:'https://citas.prodecon.gob.mx',
        property:'DR México'
    }
];