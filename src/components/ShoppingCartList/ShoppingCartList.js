import React from "react";
import { Grid, Fab } from "@mui/material";
import "./ShoppingCartList.scss";
import Checkbox from "@mui/material/Checkbox";

export const ShoppingCartList = ({ shoppingList }) => {
  const itemCounts = {};

  shoppingList.forEach((item) => {
    const itemId = item.noticiaId;
    if (itemCounts[itemId]) {
      itemCounts[itemId] += 1;
    } else {
      itemCounts[itemId] = 1;
    }
  });

  const unicoShoppingCartList = shoppingList.reduce((unique, favorite) => {
    if (!unique.some((item) => item.noticiaId === favorite.noticiaId)) {
      unique.push(favorite);
    }
    return unique;
  }, []);

  return (
    <div>
      <Grid container spacing={4} className="grid-principal-container">
        <Grid className="grid-container-image" item xs={3} sm={3} md={3}>
          <div className="img-content-grid">
            {shoppingList.length > 0 ? (
              unicoShoppingCartList.map((item) => (
                <div key={item.noticiaId}>
                  <div>
                    <img
                      className="img-shopping-cart"
                      src={item.Image}
                      alt={item.noticiaTitle}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>No hay servicios</p>
            )}
          </div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div className="text-content-grid">
            {shoppingList.length > 0 ? (
              unicoShoppingCartList.map((item) => (
                <div key={item.noticiaId}>
                  <p>{item.noticiaTitle}</p>
                  <p>{item.noticiaDescription}</p>
                </div>
              ))
            ) : (
              <p>No hay servicios</p>
            )}
          </div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div className="text-content-grid">
            {shoppingList.length > 0 ? (
              unicoShoppingCartList.map((item) => (
                <p>Cantidad: {itemCounts[item.noticiaId]}</p>
              ))
            ) : (
              <p>No hay servicios</p>
            )}
          </div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div className="text-content-grid">
            {shoppingList.length > 0 ? (
              <Fab>
                <Checkbox defaultChecked />
              </Fab>
            ) : (
              <p>No hay servicios</p>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
