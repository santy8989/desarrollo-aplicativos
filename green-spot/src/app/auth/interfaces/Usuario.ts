export interface Usuario {
  name:     string;
  pass: string;
  admin:    boolean;
  id:       string;
}

export interface UsuarioDTO {
  name:     string;
  admin:    boolean;
  pass?: string;
  id:       string;
}
