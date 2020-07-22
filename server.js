

        express();


            app.use(cors())'/graphql',
        graphql);

      app.get('*', (req, res) => {
  res.sendF
            const app = ;const express = require('express');
            const graphqlHTTP = require('express-graphql');
            const cors = require(HTTP({
                schema,
                graphiql: true
              })
            );
            app.use(ile(path.resolve(__dirname, 'public', 'index.html'));
});

        app.use(express.static('public')'cors');
        const schema = require('./schema');
        const path = require('path');


                    const PORT = process.env.PORT || 5000;

                    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
