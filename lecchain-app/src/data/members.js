const members = [
    {
        id: 0,
        name: "Marcelo Hurtado",
        email: "marcelo.hurtado@utec.edu.pe",
        career: "Bioingeniería",
        work: "Team leader, Dry lab, Human practices.",
        interests: "Ingeniería genética, Bioinformática, Tecnologías e instrumentación médica.",
        description: "Estudiante de último año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC interesado en el desarrollo y manejo de circuitos sintéticos, estudios de expresión genómica a través de la bioinformática y en el desarrollo de tecnologías e instrumentación médica.",
        image: "/team/Marcelo.jpeg"
    },
    {
        id: 1,
        name: "Allison Aldoradin",
        email: "allison.aldoradin@utec.edu.pe",
        career: "Bioingeniería",
        work: "Dry lab, Graphic designer, Human practices.",
        interests: "Biología sintética, Cáncer, Ingeniería de tejidos.",
        description: "Estudiante de cuarto año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC. Interesada en investigación clínica de nuevos métodos de diagnóstico y monitoreo de enfermedades y terapias celulares aplicadas a la medicina regenerativa.",
        image: "/team/Allison.jpg"
    },
    {
        id: 2,
        name: "Amalia Villena",
        email: "amalia.villena@utec.edu.pe",
        career: "Bioingeniería",
        work: "Wet lab, Social media, Human practices.",
        interests: "Neurociencias, Ingeniería de tejidos.",
        description: "Estudiante de último año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC interesada en desarrollar investigaciones y proyectos dentro del área de la neurociencia y la ingeniería de tejidos.",
        image: "/team/Amalia.jpeg"
    },
    {
        id: 3,
        name: "Alessandro Giuffra",
        email: "alessandro.giuffra@utec.edu.pe",
        career: "Ingeniería Electrónica",
        work: "Web page developer, Human practices.",
        interests: "Embedded Systems, IoT, Robotics, Software design",
        description: "Estudiante de último año de la carrera de Ingeniería Electrónica en la Universidad de Ingeniería y Tecnología UTEC y egresado del Bootcamp de Desarrollo Web Full Stack con intereses en la electrónica computacional y el desarrollo de softwares web, móvil y IoT aplicados a áreas de la electrónica moderna.",
        image: "/team/Alessandro.jpeg"
    },
    {
        id: 4,
        name: "Diana Peña",
        email: "diana.pena@utec.edu.pe",
        career: "Bioingeniería",
        work: "Wet lab, Human practices.",
        interests: "Ingeniería de tejidos, Biomateriales, Biología sintética.",
        description: "Estudiante de último año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC  interesada en temas de ingeniería de tejidos, biomateriales y en el desarrollo de tecnología en biotecnología que permita mejorar la calidad de vida del paciente global.",
        image: "/team/Diana.jpeg"
    },
    {
        id: 5,
        name: "Fatima Salazar",
        email: "maria.salazar@utec.edu.pe",
        career: "Bioingeniería",
        work: "Dry lab, Graphic designer, Human practices, Social media.",
        interests: "Biorremediación, Biología sintética, Ingeniería de tejidos.",
        description: "Estudiante de cuarto año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC interesada en el desarrollo de proyectos e investigaciones dentro de las áreas de enfermedades genéticas, responsabilidad de la salud, medioambiente y biorremediación.",
        image: "/team/Fatima.jpg"
    },
    {
        id: 6,
        name: "Gladys Cavero",
        email: "gladys.cavero@utec.edu.pe",
        career: "Bioingeniería",
        work: "Wet lab, Human practices, Collaborations.",
        interests: "Biología sintética, Bioinformática, Ingeniería de tejidos.",
        description: "Estudiante de último año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC. Gran interés en el desarrollo de soluciones que puedan llegar a tener un impacto real, mediante el uso de la biología sintética, bioinformática e ingeniería de tejidos.",
        image: "/team/Gladys.jpg"
    },
    {
        id: 7,
        name: "José Cisneros",
        email: "jose.cisneros@utec.edu.pe",
        career: "Bioingeniería",
        work: "Wet lab, Entrepreneurship.",
        interests: "Biotecnología industrial, Biología sintética, Bioinformática.",
        description: "Estudiante de último año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC interesado en el diseño y desarrollo de productos tecnológicos para el diagnóstico, prevención y tratamiento de enfermedades usando herramientas de biología sintética, bioinformática y mecatrónica.",
        image: "/team/Jose.jpg"
    },
    {
        id: 8,
        name: "Luis Quesada",
        email: "luis.quesada@utec.edu.pe",
        career: "Bioingeniería",
        work: "Coordinator, Wet lab, Human practices, Collaborations.",
        interests: "Impresión 3D, Biología sintética, Ingeniería clínica.",
        description: "Estudiante de último año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC interesado en las tecnologías de impresión 3D, bioprocesos, bioinformática e ingeniería clínica para el desarrollo de proyectos de impacto social. ",
        image: "/team/Luis.jpg"
    },
    {
        id: 9,
        name: "Massiel Copara",
        email: "massiel.copara@utec.edu.pe",
        career: "Bioingeniería",
        work: "Dry lab, Audiovisual designer, Web page designer.",
        interests: "Inmunología, Ingeniería de tejidos, Ingeniería genética.",
        description: "Estudiante de cuarto año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC con gran interés por proyectos de investigación involucrados en la Ingeniería de Tejidos, la Inmunología y la Ingeniería Genética.",
        image: "/team/Massiel.jpeg"
    },
    {
        id: 10,
        name: "Ximena Fernández",
        email: "ximena.fernandez@utec.edu.pe",
        career: "Bioingeniería",
        work: "Dry lab, Collaborations, Human practices.",
        interests: "Neurociencias, Biología sintética, Bioinformática.",
        description: "Estudiante de cuarto año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC con interés en el desarrollo de proyectos e investigaciones en el campo de la biotecnología roja para así crear aportes en tratamientos de enfermedades.",
        image: "/team/Ximena.png"
    },
    {
        id: 11,
        name: "Yomali Ferreyra",
        email: "yomali.ferreyra@utec.edu.pe",
        career: "Bioingeniería",
        work: "Wet lab, Human practices.",
        interests: "Biología sintética, Bioinformática aplicada a la oncogenética.",
        description: "Estudiante de cuarto año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC con intereses en el uso de biomateriales para el tratamiento de enfermedades dermatológicas o quemaduras por medio de la biotecnología y la investigación oncogenética a través de la bioinformática.",
        image: "/team/Yomali.jpeg"
    },
    {
        id: 12,
        name: "Valeria Marquez",
        email: "valeria.marquez@utec.edu.pe",
        career: "Bioingeniería",
        work: "Wet lab, Collaborations",
        interests: "Biología sintética, Bioinformática.",
        description: "Estudiante de último año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC interesada en la investigación de nuevos métodos y soluciones para la prevención y tratamiento de enfermedades a través de la biología sintética y la bioinformática.",
        image: "/team/Marcelo.jpeg"
    },
    {
        id: 13,
        name: "Ariana Villegas",
        email: "ariana.villegas@utec.edu.pe",
        career: "Ciencias de la Computación",
        work: "Web page developer",
        interests: "Deep learning",
        description: "Estudiante de cuarto año de la carrera de Ciencias de la Computación en la Universidad de Ingeniería y Tecnología UTEC, interesada en las ramas de deep learning, inteligencia artificial y el desarrollo web.",
        image: "/team/Marcelo.jpeg"
    },
    {
        id: 14,
        name: "Nathaly Dongo",
        email: "nathaly.dongo@utec.edu.pe",
        career: "Bioingeniería",
        work: "Wet lab, Audiovisual designer.",
        interests: "Bioinformática, Ingeniería de proteínas, Biología sintética.",
        description: "Estudiante de cuarto año de la carrera de Bioingeniería en la Universidad de Ingeniería y Tecnología UTEC con interés en la investigación de nuevos métodos de producción y soluciones a problemas industriales y sociales a través de medios biotecnológicos.",
        image: "/team/Nathaly.jpeg"
    }
];

export default members;
