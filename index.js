require('dotenv').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const cors = require('cors');
const { userRouter, loginRouter, categoriesRouter, blogPostsRouter } = require('./routers');

const app = express();
app.use(express.json());
app.use(cors());
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/blogpost', blogPostsRouter);

app.listen(process.env.PORT, () => console.log(`ouvindo porta: ${process.env.PORT}!`));

app.get('/', (request, response) => {
  response.send();
});
