require('dotenv').config();
const express = require('express');
const { userRouter, loginRouter, categoriesRouter, blogPostsRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', blogPostsRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});
