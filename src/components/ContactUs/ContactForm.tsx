"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BsSendFill } from "react-icons/bs";

// Define the form input types
interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // Set up the React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  // Handle form submission
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // Your form submission logic here
    console.log("Form Data Submitted: ", data);
  };

  return (
    <div className="max-w-lg w-full mx-auto p-4 rounded-lg  lg:w-2/3 ">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="mt-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="mt-2 h-32"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" className="mt-4 w-full">
            Submit <BsSendFill />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
