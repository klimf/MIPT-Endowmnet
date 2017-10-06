
export default function (decorators) {
  return (restClient) => decorators.reduce((client, nextDecorator) => nextDecorator(client), restClient);
}
