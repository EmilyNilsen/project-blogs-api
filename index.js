require('dotenv').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const { userRouter, loginRouter, categoriesRouter, blogPostsRouter } = require('./routers');

const app = express();

const swaggerDocument = YAML.load('./swagger.yaml');

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', blogPostsRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});
