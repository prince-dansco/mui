import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={290}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              princewill
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="what is on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="secondary" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>post</Button>
            <Button
              sx={{
                width: "100px",
              }}
            >
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;