import z, { ZodError } from "zod";

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      //format zod error (treeifyError, flattenError...)
      const formatedError = z.treeifyError(error);

      return res.status(400).send(formatedError);
    }
    res.status(400).send(error);
  }
};

export default validate;
