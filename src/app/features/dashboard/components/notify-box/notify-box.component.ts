import { Component } from '@angular/core';

interface Notificacion {
  fecha: string;
  tiempoHace: string;
  mensaje: string;
  remitente: string;
}

@Component({
  selector: 'app-notify-box',
  templateUrl: './notify-box.component.html',
  styleUrls: ['./notify-box.component.scss']
})
export class NotifyBoxComponent {
  notificaciones: Notificacion[] = [
    {
      fecha: '16 de junio, 2019',
      tiempoHace: 'hace 5 min',
      mensaje: 'Se ha actualizado el horario de clases para la semana próxima. Por favor, revisa el nuevo horario en el portal.',
      remitente: 'Jennyfar Lopez'
    },
    {
      fecha: '15 de junio, 2019',
      tiempoHace: 'hace 10 min',
      mensaje: 'Se ha publicado una nueva tarea en tu curso. Asegúrate de leer las instrucciones y cumplir con la fecha límite.',
      remitente: 'John Doe'
    },
    {
      fecha: '14 de junio, 2019',
      tiempoHace: 'hace 20 min',
      mensaje: 'La reunión de equipo se ha reprogramado para el martes a las 10:00 AM. Verifica la nueva invitación en tu calendario.',
      remitente: 'Ana García'
    },
    {
      fecha: '13 de junio, 2019',
      tiempoHace: 'hace 30 min',
      mensaje: 'Tu solicitud para el nuevo curso ha sido aprobada. Puedes empezar a prepararte revisando el material disponible en línea.',
      remitente: 'Pedro Fernández'
    },
    {
      fecha: '12 de junio, 2019',
      tiempoHace: 'hace 1 hora',
      mensaje: 'Se ha agregado un comentario a tu última tarea. Revisa el feedback para mejorar tu próximo trabajo.',
      remitente: 'Laura Martínez'
    },
    {
      fecha: '11 de junio, 2019',
      tiempoHace: 'hace 2 horas',
      mensaje: 'Se han realizado cambios en la política de asistencia. Por favor, revisa el documento actualizado en el portal institucional.',
      remitente: 'Carlos Ramírez'
    },
    {
      fecha: '10 de junio, 2019',
      tiempoHace: 'hace 3 horas',
      mensaje: 'Has recibido una nueva solicitud de amistad de un compañero de clase. Acepta o rechaza la solicitud en tu perfil.',
      remitente: 'Sofía Pérez'
    }
  ];
}
