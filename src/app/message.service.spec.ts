import { MessageService } from './message.service';

describe('MessageService', () => {
  let messageService: MessageService;

  beforeEach(() => {});

  it('Should have no messages', () => {
    messageService = new MessageService();

    expect(messageService.messages.length).toBe(0);
  });

  it('Should add a message when add is called', () => {
    messageService = new MessageService();

    messageService.add('first message');

    expect(messageService.messages.length).toBe(1);
  });

  it('Should remove all messages when clear is called', () => {
    messageService = new MessageService();
    messageService.add('first message');

    messageService.clear();

    expect(messageService.messages.length).toBe(0);
  });
});
