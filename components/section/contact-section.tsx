"use client";
import { TypographyH2, TypographyP } from "../typo/typography";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup } from "../ui/field";
import { sendMessage } from "@/app/lib/actions";
import { contactSchema, ContactSchema } from "@/app/lib/schemas";
import { ReactNode, useState } from "react";
import { CircleCheckIcon, CircleXIcon, Loader2Icon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface Props {
  className?: string;
}

type FormSubmissionState = "idle" | "pending" | "success" | "error";

const ContactSection = ({ className }: Props) => {
  const [formSubmissionStatus, setFormSubmissionStatus] =
    useState<FormSubmissionState>("idle");

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactSchema) {
    setFormSubmissionStatus("pending");

    const response = await sendMessage(data);

    if (response.success) {
      setFormSubmissionStatus("success");
      form.reset();
    } else {
      setFormSubmissionStatus("error");
    }
  }

  const icons = {
    success: (
      <SubmissionSatusIcon
        icon={<CircleCheckIcon className="size-4 text-green-300" />}
        text="Message sent!"
      />
    ),
    pending: <Loader2Icon className="size-4 animate-spin" />,
    error: (
      <SubmissionSatusIcon
        icon={<CircleXIcon className="size-4 text-red-300" />}
        text="An error occured, please try again"
      />
    ),
    idle: null,
  } as const;

  const icon = icons[formSubmissionStatus] ?? null;

  return (
    <section className={className}>
      <TypographyH2>Contact</TypographyH2>
      <div className="font-mono">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <CardTitle>Send me a message</CardTitle>
              {icon}
            </div>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup className="">
                <Controller
                  name="fullName"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder="Full name"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder="Email"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Textarea
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder="Your message"
                        maxLength={500}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>

              <Button
                type="submit"
                variant="outline"
                className="w-full text-muted-foreground mt-4"
              >
                <TypographyP>Send message</TypographyP>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;

const SubmissionSatusIcon = ({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) => (
  <Tooltip>
    <TooltipTrigger>{icon}</TooltipTrigger>
    <TooltipContent>
      <p>{text}</p>
    </TooltipContent>
  </Tooltip>
);
