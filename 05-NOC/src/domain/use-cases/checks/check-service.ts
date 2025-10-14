interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase{

  // Inyección de Dependencias
  constructor(
    private readonly SuccessCallback: SuccessCallback,
    private readonly ErrorCallback: ErrorCallback,
  ) {}

  async execute(url: string) {
    try {

      const req = await fetch(url);
      if(!req.ok) {
        throw new Error(`Error on check service: ${url}`)
      }

      this.SuccessCallback()
      
      return true;

    } catch (error) {

      this.ErrorCallback(`${error}`);

      return false;

    }

  }
}