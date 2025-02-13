export default class MapController {
  constructor(host) {
    this.host = host
    this.host.addController(this)

    this.map = {}
  }

  async get(name) {
    try {
      const req = await fetch(`/api/map/${name}`)

      console.log(req)

      const json = await req.json()

      this.map = json

      return json
    } catch (err) {
      console.error(err)
    }
  }
}
