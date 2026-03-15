import Event from '../models/Event.js';

export const getEvents = async (_req, res) => res.json(await Event.find());
export const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: 'Not found' });
  res.json(event);
};
export const createEvent = async (req, res) => res.status(201).json(await Event.create(req.body));
export const updateEvent = async (req, res) => res.json(await Event.findByIdAndUpdate(req.params.id, req.body, { new: true }));
export const deleteEvent = async (req, res) => { await Event.findByIdAndDelete(req.params.id); res.json({ success: true }); };
export const registerEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: 'Not found' });
  event.registeredParticipants.push(req.user._id);
  await event.save();
  res.json({ message: 'Registered', event });
};

