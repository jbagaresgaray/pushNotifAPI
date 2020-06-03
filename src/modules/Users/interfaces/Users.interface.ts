import { ApiProperty } from '@nestjs/swagger';

export class UsersDTO {
  @ApiProperty()
  platform: string;

  @ApiProperty()
  modelName: string;

  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  appVersion: string;

  @ApiProperty()
  appBuild: string;

  @ApiProperty()
  operatingSystem: string;

  @ApiProperty()
  osVersion: string;

  @ApiProperty()
  pushToken: string;
}

// export class UsersDTO {
//   readonly platform: string;

//   readonly modelName: string;

//   readonly manufacturer: string;

//   readonly uuid: string;

//   readonly appVersion: string;

//   readonly appBuild: string;

//   readonly operatingSystem: string;

//   readonly osVersion: string;

//   readonly pushToken: string;
// }
