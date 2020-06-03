import { ApiProperty } from '@nestjs/swagger';

export class NotificationsDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  message: string;

  @ApiProperty({
    default: '',
  })
  image: string;

  @ApiProperty()
  notificationName: string;

  @ApiProperty({
    default: {},
  })
  data: any;

  @ApiProperty()
  receiverToken: string;

  @ApiProperty({
    default: new Date().toISOString(),
  })
  created_at: string;

  @ApiProperty({
    default: false,
  })
  is_removed: boolean;

  @ApiProperty({
    default: false,
  })
  is_read: boolean;

  @ApiProperty()
  userId: string;
}

// export class NotificationsDTO {
//   title: string;

//   message: string;

//   image: string;

//   notificationName: string;

//   notificationData: any;

//   receiverToken: string;

//   pushDate: string;
// }
