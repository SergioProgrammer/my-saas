import React from "react";
import { useState, useMemo } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Github, Loader2, ShieldCheck } from "lucide-react";

// shadcn/ui components (assumes your project has them set up)
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// ------------------
// Validación (Zod)
// ------------------
const schema = z
  .object({
    nombre: z
      .string({ required_error: "Tu nombre es obligatorio" })
      .min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z
      .string({ required_error: "El correo es obligatorio" })
      .email("Introduce un correo válido"),
    password: z
      .string({ required_error: "La contraseña es obligatoria" })
      .min(8, "Mínimo 8 caracteres")
      .regex(/[A-Z]/, "Incluye al menos una mayúscula")
      .regex(/[a-z]/, "Incluye al menos una minúscula")
      .regex(/[0-9]/, "Incluye al menos un número")
      .regex(/[^A-Za-z0-9]/, "Incluye al menos un símbolo"),
    confirmar: z.string({ required_error: "Confirma tu contraseña" }),
    terminos: z.boolean().refine((v) => v === true, {
      message: "Debes aceptar los términos y la política",
    }),
  })
  .refine((data) => data.password === data.confirmar, {
    path: ["confirmar"],
    message: "Las contraseñas no coinciden",
  });

// ----------------------------------------
// Utilidad: calcular fortaleza de contraseña
// ----------------------------------------
function passwordScore(pw: string): number {
  let score = 0;
  if (!pw) return 0;
  // Longitud
  score += Math.min(10, pw.length) * 6; // hasta 60
  // Diversidad de caracteres
  const sets = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^A-Za-z0-9]/];
  const used = sets.reduce((acc, re) => acc + (re.test(pw) ? 1 : 0), 0);
  score += used * 10; // hasta 40
  return Math.min(100, score);
}

function strengthLabel(score: number): { label: string; hint: string } {
  if (score >= 80) return { label: "Fuerte", hint: "¡Buena elección!" };
  if (score >= 55) return { label: "Media", hint: "Puedes mejorarla un poco" };
  return { label: "Débil", hint: "Usa más longitud y variedad" };
}

// ----------------------------------------
// Componente principal
// ----------------------------------------
export default function RegistroUsuario() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [serverMsg, setServerMsg] = useState<string | null>(null);
  const [serverErr, setServerErr] = useState<string | null>(null);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      nombre: "",
      email: "",
      password: "",
      confirmar: "",
      terminos: false,
    },
    mode: "onChange",
  });

  const pwd = form.watch("password");
  const score = useMemo(() => passwordScore(pwd), [pwd]);
  const s = strengthLabel(score);

  async function onSubmit(values: z.infer<typeof schema>) {
    setServerMsg(null);
    setServerErr(null);
    try {
      // Simulación de llamada al backend
      // Sustituye por tu endpoint real, p. ej. /api/auth/register
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.nombre,
          email: values.email,
          password: values.password,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "No se pudo completar el registro");
      }

      setServerMsg("Cuenta creada correctamente. Revisa tu correo para verificarla.");
      form.reset();
    } catch (err: any) {
      setServerErr(err?.message || "Error inesperado");
    }
  }

  const isSubmitting = form.formState.isSubmitting;
  const isValid = form.formState.isValid;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl">Crear cuenta</CardTitle>
            <CardDescription>Regístrate para empezar a usar la aplicación.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-3">
              <Button variant="outline" className="w-full" type="button" onClick={() => alert("OAuth Google")}> 
                <Mail className="mr-2 h-4 w-4" /> Continuar con Google
              </Button>
              <Button variant="outline" className="w-full" type="button" onClick={() => alert("OAuth GitHub")}> 
                <Github className="mr-2 h-4 w-4" /> Continuar con GitHub
              </Button>
            </div>

            <div className="relative">
              <Separator className="my-2" />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-muted-foreground">o continúa con tu correo</span>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" aria-describedby="password-hint">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Tu nombre" className="pl-9" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="email" placeholder="tucorreo@ejemplo.com" className="pl-9" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type={showPwd ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-9 pr-10"
                            aria-describedby="password-hint"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2"
                            onClick={() => setShowPwd((s) => !s)}
                            aria-label={showPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                          >
                            {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </FormControl>
                      <div id="password-hint" className="text-xs text-muted-foreground flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5" /> Usa 8+ caracteres, mayúsculas, minúsculas, números y símbolos.
                      </div>
                      <div className="space-y-1">
                        <Progress value={score} className="h-2" />
                        <div className="text-xs text-muted-foreground">Fortaleza: <span className="font-medium">{s.label}</span> · {s.hint}</div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmar"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirmar contraseña</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type={showPwd2 ? "text" : "password"}
                            placeholder="••••••••"
                            className="pl-9 pr-10"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2"
                            onClick={() => setShowPwd2((s) => !s)}
                            aria-label={showPwd2 ? "Ocultar contraseña" : "Mostrar contraseña"}
                          >
                            {showPwd2 ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="terminos"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} id="terminos" />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <Label htmlFor="terminos" className="font-normal text-sm text-muted-foreground">
                            Acepto los <a className="underline" href="/terminos" target="_blank" rel="noreferrer">Términos</a> y la <a className="underline" href="/privacidad" target="_blank" rel="noreferrer">Política de Privacidad</a>.
                          </Label>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creando cuenta...
                    </>
                  ) : (
                    "Crear cuenta"
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  ¿Ya tienes cuenta? <a href="/login" className="underline">Inicia sesión</a>
                </p>

                {serverMsg && (
                  <div className="text-green-600 text-sm text-center" role="status">{serverMsg}</div>
                )}
                {serverErr && (
                  <div className="text-red-600 text-sm text-center" role="alert">{serverErr}</div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// ------------------
// Notas de integración
// ------------------
// 1) Asegúrate de tener configurado Tailwind y los componentes de shadcn/ui.
// 2) Reemplaza el endpoint "/api/register" por el de tu backend (Next.js API route, Express, etc.).
// 3) Para verificación por correo, envía un email tras crear el usuario y muestra el aviso de confirmación.
// 4) Si usas NextAuth o similar, puedes conectar los botones de OAuth fácilmente.
