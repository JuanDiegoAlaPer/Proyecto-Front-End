import React from "react";
import { Grid } from "@mui/material";

export const ShoppingCartList = ({ shoppingList }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8} md={8}>
          <h2>Servicios</h2>
          <Grid container spacing={2}>
            <Grid className="grid-container-image" item xs={8} sm={8} md={8}>
              <div className="img-content-grid">
                {shoppingList.length > 0 ? (
                  shoppingList.map((service) => (
                    <div key={service.noticiaId}>
                      <div>
                        <img src={service.Image} alt={service.noticiaTitle} />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No hay servicios</p>
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
