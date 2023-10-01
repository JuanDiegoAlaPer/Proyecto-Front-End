import React, { useState } from "react";
import hardware from "../../assets/images/hardware.jpg";
import programacion from "../../assets/images/programación.jpg";
import reparacion from "../../assets/images/reparaciones.jpg";
import update from "../../assets/images/hardupdate.jpg";
import redes from "../../assets/images/redes.jpg";
import appweb from "../../assets/images/appweb.jpg";
import softemp from "../../assets/images/softemp.jpg";
import consulta from "../../assets/images/consulta.jpg";
import seguridad from "../../assets/images/seguridad.jpg";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Modal,
} from "@mui/material";

import "./Service.scss";

export const Service = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [showServices, setShowServices] = useState(false);

  const handleOpenServices = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setShowServices(true);
  };

  const handleCloseServices = () => {
    setShowServices(false);
  };

  const categories = [
    {
      categoryId: "1",
      categoryName: "Mantenimiento",
      categoryDescription:
        " Ofrecemos soluciones informáticas integrales para satisfacer todas tus necesidades tecnológicas. Desde el soporte técnico y la reparación de hardware hasta el desarrollo de software a medida.",
      Image: hardware,
      categoryActive: true,
    },
    {
      categoryId: "2",
      categoryName: "Desarrollo",
      categoryDescription:
        "Nuestro servicio de programación web ofrece soluciones a medida para tus necesidades digitales.Diseñamos y desarrollamos sitios web profesionales, aplicaciones web y sistemas en línea.",
      Image: programacion,
      categoryActive: true,
    },
    {
      categoryId: "3",
      categoryName: "Consultoría",
      categoryDescription: "Nuestros consultores altamente calificados trabajan contigo para identificar desafíos, optimizar procesos y maximizar la eficiencia de tus sistemas y recursos informáticos. Ayudandote a tomar decisiones informadas y estratégicas que impulsen el éxito de tu empresa en la era digital. ",
      Image: consulta,
      categoryActive: true,
    },
    {
      categoryId: "4",
      categoryName: "Seguridad",
      categoryDescription: "Nuestro servicio de seguridad informática está diseñado para proteger tu empresa o negocio contra las amenazas cibernéticas en constante evolución. Contamos con un equipo de expertos en seguridad que implementa estrategias proactivas y soluciones avanzadas para salvaguardar tus datos y sistemas críticos.",
      Image: seguridad,
      categoryActive: true,
    },
    {
      categoryId: "5",
      categoryName: "Cat5",
      categoryDescription: "Description",
      Image: null,
      categoryActive: false,
    },
  ];

  const services = [
    {
      serviceId: "1",
      serviceName: "Reparación de hardware",
      categoryId: "1",
      serviceDescription:
        "Servicio de reparación de componentes de hardware dañados o defectuosos en computadoras y dispositivos.",
      Image: reparacion,
      serviceActive: true,
    },
    {
      serviceId: "2",
      serviceName: "Actualización de hardware",
      categoryId: "1",
      serviceDescription:
        "Servicio para mejorar el rendimiento de una computadora mediante la instalación de componentes de hardware más nuevos y potentes.",
      Image: update,
      serviceActive: true,
    },
    {
      serviceId: "3",
      serviceName: "Instalación de redes",
      categoryId: "1",
      serviceDescription:
        "Servicio que incluye la instalación y configuración de redes de computadoras, incluyendo routers y switches.",
      Image: redes,
      serviceActive: true,
    },
    {
      serviceId: "4",
      serviceName: "Desarrollo de Aplicaciones Web",
      categoryId: "2",
      serviceDescription:
        " Creación de aplicaciones web personalizadas para empresas y organizaciones.",
      Image: appweb,
      serviceActive: true,
    },
    {
      serviceId: "5",
      serviceName: "Desarrollo de Software Empresarial",
      categoryId: "2",
      serviceDescription:
        "Creación de software personalizado para empresas que automatiza procesos y mejora la eficiencia.",
      Image: softemp,
      serviceActive: true,
    },
  ];

  const selectedCategoryServices = services.filter(
    (service) => service.categoryId === selectedCategoryId
  );

  return (
    <div className="cards-container">
      {categories.map((category) => {
        if (category.categoryActive) {
          return (
            <Card sx={{ maxWidth: 345, background: "#fff" }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={category.Image}
                  alt={category.categoryName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.categoryName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.categoryDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleOpenServices(category.categoryId)}
                >
                  MÁS INFO
                </Button>
              </CardActions>
            </Card>
          );
        }
      })}
      <div className="services-container">
        {selectedCategoryServices.map((service) => {
          if (service.serviceActive) {
            return (
              <Card sx={{ maxWidth: 345, background: "#fff" }} className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={service.Image}
                    alt={service.serviceName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.serviceName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.serviceDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={handleCloseServices}
                  >
                    Close
                  </Button>
                </CardActions> */}
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Service;
