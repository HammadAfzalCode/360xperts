import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";

export default function MultiActionAreaCard({
  path,
  heading,
  description,
  buttonList,
}) {
  return (
    <Card
      sx={{
        maxWidth: "90vw",

        marginX: "auto",
        display: "flex",
        marginBottom: "6rem",
        justifyContent: "space-around",
        border: "1px solid #fff",
        borderRadius: "20px",
      }}
    >
      <CardActionArea
        sx={{
          width: "20vw",
          background: "linear-gradient(to bottom right, #d0140f, #fae8e7)",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={path}
          alt="green iguana"
          sx={{
            background: "linear-gradient(to bottom right, #d0140f, #fae8e7)",
            objectFit: "contain",

            width: "20vw",
            height: "70vh",
          }}
        />
      </CardActionArea>
      <CardContent>
        <Typography
          variant="h3"
          sx={{
            marginBottom: "4rem",
            cursor: "pointer",
            marginTop: "2rem",
            paddingX: "40px",

            "&:hover": {
              color: "#d0140f",
              transition: "color .4s ease",
            },
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            paddingX: "40px",
            fontFamily: "clash display",
            color: "#181815",
            marginBottom: "2rem",
          }}
        >
          {description}
        </Typography>
        <Button
          endIcon={<ArrowRightAltIcon />}
          variant="text"
          sx={{ paddingX: "40px", marginBottom: "4rem", color: "#d0140f" }}
        >
          Read More
        </Button>
        <Stack direction="row" spacing={2} sx={{ paddingX: "40px" }}>
          {buttonList.map((button) => (
            <Button
              sx={{
                color: "#d0140f",
                borderColor: "#d0140f",
                "&:hover": {
                  color: "#181815",
                  borderColor: "#181815",
                  transition: "color .4s ease",
                },
              }}
              variant="outlined"
            >
              {button}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
