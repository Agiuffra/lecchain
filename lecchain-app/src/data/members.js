const members = [
    {
        id: 0,
        name: "Marcelo Hurtado",
        email: "marcelo.hurtado@utec.edu.pe",
        career: "Bioengineering",
        work: "Team leader, Dry lab, Human practices.",
        interests: "Genetic Engineering, Bioinformatic, Medical Technology and Instrumentation.",
        description: "Last year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the development and management of synthetic circuits, genome expression studies through bioinformatics and development of medical technology and instrumentation.",
        image: "/team/Marcelo.jpeg"
    },
    {
        id: 1,
        name: "Allison Aldoradin",
        email: "allison.aldoradin@utec.edu.pe",
        career: "Bioengineering",
        work: "Dry lab, Graphic designer, Human practices.",
        interests: "Synthetic Biology, Cancer, Tissue Engineering.",
        description: "Fourth year Bioengineering student at University of Engineering and Technology - UTEC. Interested in clinic investigation of new methods of diagnosis and monitoring of deseases and celular therapy applied to regenerative medicine.",
        image: "/team/Allison.jpg"
    },
    {
        id: 2,
        name: "Amalia Villena",
        email: "amalia.villena@utec.edu.pe",
        career: "Bioengineering",
        work: "Wet lab, Social media, Human practices.",
        interests: "Neuroscience, Tissue Engineering.",
        description: "Last year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the development of investigations and proyects in neuroscience and tissue engineering.",
        image: "/team/Amalia.jpeg"
    },
    {
        id: 3,
        name: "Alessandro Giuffra",
        email: "alessandro.giuffra@utec.edu.pe",
        career: "Electrical Engineering",
        work: "Web page developer, Audio and Video Editor.",
        interests: "Embedded Systems, IoT, Robotics, Software design",
        description: "Last year Electrical Engineering student at University of Engineering and Technology - UTEC and graduate of Tecsup's Web Full Stack Bootcamp. Interested in the development of embedded systems for robotics, IoT and monitoring.",
        image: "/team/Alessandro.jpeg"
    },
    {
        id: 4,
        name: "Diana Peña",
        email: "diana.pena@utec.edu.pe",
        career: "Bioengineering",
        work: "Wet lab, Human practices.",
        interests: "Tissue Engineering, Biomaterials, Synthetic Biology.",
        description: "Last year Bioengineering student at University of Engineering and Technology - UTEC. Interested in topics of tissue engineering, biomaterials and the development of biotechnology capable of improve the life of a global pacient.",
        image: "/team/Diana.jpeg"
    },
    {
        id: 5,
        name: "Fatima Salazar",
        email: "maria.salazar@utec.edu.pe",
        career: "Bioengineering",
        work: "Dry lab, Graphic designer, Human practices, Social media.",
        interests: "Bioremediation, Synthetic Biology, Tissue Engineering.",
        description: "Fourth year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the development of proyects and investigation about genetic desease, health responsibility, environment and bioremediation.",
        image: "/team/Fatima.jpg"
    },
    {
        id: 6,
        name: "Gladys Cavero",
        email: "gladys.cavero@utec.edu.pe",
        career: "Bioengineering",
        work: "Wet lab, Human practices, Collaborations.",
        interests: "Synthetic Biology, Bioinformatics, Tissue Engineering.",
        description: "Last year Bioengineering student at University of Engineering and Technology - UTEC. Big interest in the development of real impact solutions through synthetic biology, bioinformatics and tissue engineering.",
        image: "/team/Gladys.jpg"
    },
    {
        id: 7,
        name: "José Cisneros",
        email: "jose.cisneros@utec.edu.pe",
        career: "Bioengineering",
        work: "Wet lab, Entrepreneurship.",
        interests: "Industrial Biotechnology, Synthetic Biology, Bioinformatics.",
        description: "Last year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the design and development of technological products for the diagnosis, prevention and treatment of deseases using synthetic biology, bioinformatics y mechatronics.",
        image: "/team/Jose.jpg"
    },
    {
        id: 8,
        name: "Luis Quesada",
        email: "luis.quesada@utec.edu.pe",
        career: "Bioengineering",
        work: "Coordinator, Wet lab, Human practices, Collaborations.",
        interests: "3D Printing, Synthetic Biology, Clinic Engineering.",
        description: "Last year Bioengineering student at University of Engineering and Technology - UTEC. Interested in 3D printing, bioprocesses, bioinformatics and clinic engineering for social impact proyect.",
        image: "/team/Luis.jpg"
    },
    {
        id: 9,
        name: "Massiel Copara",
        email: "massiel.copara@utec.edu.pe",
        career: "Bioengineering",
        work: "Dry lab, Audiovisual designer, Web page designer.",
        interests: "Inmunology, Tissue Engineering, Genetics Engineerinc.",
        description: "Fourth year Bioengineering student at University of Engineering and Technology - UTEC. Big interest in investigation proyects involved in tissue engineering, inmunology and genetics engineering.",
        image: "/team/Massiel.jpeg"
    },
    {
        id: 10,
        name: "Ximena Fernández",
        email: "ximena.fernandez@utec.edu.pe",
        career: "Bioengineering",
        work: "Dry lab, Collaborations, Human practices.",
        interests: "Neuroscience, Synthetic Biology, Bioinformatics.",
        description: "Fourth year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the development of proyects and investigations about red biotecnology to contribute in the treatment of different deseases.",
        image: "/team/Ximena.png"
    },
    {
        id: 11,
        name: "Yomali Ferreyra",
        email: "yomali.ferreyra@utec.edu.pe",
        career: "Bioengineering",
        work: "Wet lab, Human practices.",
        interests: "Synthetic Biology, Aplied Bioinformatics to Oncogenetics.",
        description: "Fourth year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the usage of biomaterials for dermatologic desease treatment or burns through biotechnology and the oncogenetic investigation through bioinformatics.",
        image: "/team/Yomali.jpeg"
    },
    {
        id: 12,
        name: "Valeria Marquez",
        email: "valeria.marquez@utec.edu.pe",
        career: "Bioengineering",
        work: "Wet lab, Collaborations",
        interests: "Synthetic Biology, Bioinformatics.",
        description: "Last year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the investigation of new methods and solutions to prevention and treatment of deseases through synthetic biology and bioinformatics.",
        image: "/team/default.jpg"
    },
    {
        id: 13,
        name: "Ariana Villegas",
        email: "ariana.villegas@utec.edu.pe",
        career: "Computer Science",
        work: "Web page developer",
        interests: "Deep learning",
        description: "Fourth year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the topics of deep learning, AI and web development.",
        image: "/team/default.jpg"
    },
    {
        id: 14,
        name: "Nathaly Dongo",
        email: "nathaly.dongo@utec.edu.pe",
        career: "Bioengineering",
        work: "Wet lab, Audiovisual designer.",
        interests: "Bioinformatics, Protein Engineering, Synthetic Biology.",
        description: "Fourth year Bioengineering student at University of Engineering and Technology - UTEC. Interested in the investigation of new methods of productions and solutions to industrial and social issues through biotechnological media.",
        image: "/team/Nathaly.jpeg"
    }
];

export default members;
