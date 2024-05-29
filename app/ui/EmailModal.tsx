import React, { useState } from 'react';
import Modal from './Modal';
import Input from './Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useEmailModal from '@/hooks/useEmailModal';
import { Button } from './button';
import { EmailFormat } from '@/types';
import { postData } from '../lib/helpers';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const EmailModal = () => {
  const [content, setContent] = React.useState<string>('');
  const [filename, setFilename] = React.useState('');
  const [isLoading, setIsLoading] = useState<boolean>();
  const emailModal = useEmailModal();
  const router = useRouter();
  //handle form
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      emailModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const base64Content = content.split(',')[1];

      const emailFormat: EmailFormat = {
        receiver: values.receiver,
        image: emailModal.image,
        filename: filename,
      };

      const data = postData({
        url: 'http://localhost:3000/api/send',
        data: { emailFormat },
      });

      router.refresh();
      setIsLoading(false);
      toast.success('Email sent');
      reset();
      emailModal.onClose();
    } catch (error) {
      toast.error('Somthing went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const onAddFileAction = (e: any) => {
    const reader = new FileReader();
    const files = e.target.files;

    reader.onload = (r: any) => {
      setContent(r.target.result.toString());
      setFilename(files[0].name);
    };

    reader.readAsDataURL(files[0]);
  };

  return (
    <Modal
      title="Sending an Email"
      description=""
      isOpen={emailModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <div>
          <div className="pb-2 text-left">To :</div>
          <Input
            type="email"
            className="mt-1"
            id="receiver"
            disabled={isLoading}
            placeholder="Email"
            {...register('receiver', { required: true })}
          />
        </div>
        <div>
          <div className="pb-2 text-left">Select an image :</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            {...register('image', { required: true })}
            accept="image/*"
            onChange={onAddFileAction}
          />
        </div>
        <Button disabled={isLoading} type="submit" className="font-semibold">
          Send
        </Button>
      </form>
    </Modal>
  );
};

export default EmailModal;
