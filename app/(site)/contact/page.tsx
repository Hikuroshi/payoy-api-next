"use client";

import { Phone, MapPin, Send, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4 md:p-12 lg:p-24">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl text-orange-700 md:text-6xl font-bold tracking-tight leading-tight mb-6">
              {"Kami Siap"} <br /> Membantu Anda!
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">Punya pertanyaan atau butuh bantuan terkait Payoy? Tim kami siap membantu Anda.</p>
          </div>

          <div className="space-y-8 pt-4">
            <div className="flex gap-5 group items-start">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200">
                <MessageCircle className="text-orange-700 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Chat with us</h4>
                <p className="text-slate-500">Hubungi kami melalui chat untuk respon cepat</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200">
                <Phone className="text-orange-700 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Call us</h4>
                <p className="text-slate-500">+62 (851) 2345-5678</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200">
                <MapPin className="text-orange-700 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Visit us</h4>
                <p className="text-slate-500">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md">
          <form onSubmit={(e) => e.preventDefault()}>
            <FieldGroup>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="card-name">Your Name</FieldLabel>
                    <Input id="card-name" placeholder="Icha" required />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="cvv">Email</FieldLabel>
                      <Input id="cvv" placeholder="example@gmail.com" required />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="cvv">Phone</FieldLabel>
                      <Input id="cvv" placeholder="+62 851 2345 6789" required />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="card-number">Subject</FieldLabel>
                    <Input id="card-number" placeholder="Tulis topik yang ingin Anda" required />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="comments">Your Message</FieldLabel>
                    <Textarea id="comments" placeholder="Tulis Pesan kamu disini" className="resize-none" />
                  </Field>
                </FieldGroup>
              </FieldSet>

              <div className="flex gap-4">
                <Button type="submit">
                  <Send className="w-4 h-4 mr-2" /> Kirim
                </Button>
              </div>
            </FieldGroup>
          </form>
        </div>
      </div>
    </main>
  );
}
