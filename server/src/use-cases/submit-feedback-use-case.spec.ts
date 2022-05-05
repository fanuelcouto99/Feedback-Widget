import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    // Criando uma intancia para teste, onde os parametros não fazem nada
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        // Esperado que o teste resolva e não de erro expect(...).resolves.not.toThrow
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64,asdasiudhaoisudboaisbdaysb'
        })).resolves.not.toThrow();

        // Esperado que a função de createe sendMail sejam chamadas
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => {
        // Esperado que o teste não permita enviar feedback sem um tipo expect(...).rejects.toThrow
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64,asdasiudhaoisudboaisbdaysb'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async () => {
        // Esperado que o teste não permita enviar feedback sem um comentario expect(...).rejects.toThrow
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,asdasiudhaoisudboaisbdaysb'
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with an invalid screenshot', async () => {
        // Esperado que o teste não permita enviar feedback com uma screenshot invalida expect(...).rejects.toThrow
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Exempla comment',
            screenshot: 'teste.jpg'
        })).rejects.toThrow();
    });
});