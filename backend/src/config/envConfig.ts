import dotenv from "dotenv";
dotenv.config({ path: ".env" });

class Config {
  port: number;
  dbUri: string;
  env: string;

  constructor() {
    this.port = parseInt(process.env.PORT ?? "3001");
    this.dbUri = process.env.MONGODB_URI!.replace(
      "<username>:<password>",
      `${process.env.DB_USER!}:${process.env.DB_PASS!}`
    );
    this.env = process.env.NODE_ENV || "development";
  }

  static get port(): number {
    return this.port;
  }

  static get dbUri(): string {
    return this.dbUri;
  }
}

const config = new Config();

export default config;
