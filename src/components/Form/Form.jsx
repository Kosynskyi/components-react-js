import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Typography, Card, CardContent } from '@mui/material';
import { StyledButton, ErrorNotification } from './Form.styled';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <Card sx={{ backgroundColor: '#FAFDF8' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
            Add new idea item
          </Typography>
          <Box
            component="form"
            sx={{ width: '300px' }}
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                sx={{ backgroundColor: '#fff' }}
                id="outlined-basic"
                type="text"
                label="Title"
                name="title"
                aria-label="title"
                size="small"
                {...register('title', { required: 'required', minLength: 4 })}
              />
              {errors.title && (
                <ErrorNotification variant="caption" role="alert">
                  {errors?.title && errors?.title?.message}
                </ErrorNotification>
              )}
            </Box>
            <TextField
              sx={{ width: '100%', backgroundColor: '#fff' }}
              id="outlined-multiline-static"
              type="text"
              label="Description"
              name="description"
              multiline
              aria-label="description"
              size="small"
              rows={4}
              margin="normal"
              {...register('description')}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mb: 2,
              }}
            >
              <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '45%' }}
              >
                <Typography variant="subtitle1">Date</Typography>
                <TextField
                  sx={{ backgroundColor: '#fff' }}
                  id="outlined-basic"
                  type="date"
                  name="date"
                  aria-label="date"
                  size="small"
                  margin="none"
                  {...register('date', { required: 'required' })}
                />
                {errors.date && (
                  <ErrorNotification variant="caption" role="alert">
                    {errors?.date && errors?.date?.message}
                  </ErrorNotification>
                )}
              </Box>

              <Box sx={{ width: '45%' }}>
                <Typography variant="subtitle1">Begin time</Typography>
                <TextField
                  sx={{ width: '100%', backgroundColor: '#fff' }}
                  id="outlined-multiline-static"
                  type="time"
                  name="beginTime"
                  aria-label="begin time"
                  size="small"
                  margin="none"
                  {...register('time')}
                />
              </Box>
            </Box>

            <StyledButton
              type="submit"
              sx={{ width: '100%' }}
              variant="outlined"
            >
              Відправити
            </StyledButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Form;
